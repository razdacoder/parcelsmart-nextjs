import useStateList from "@/api/useState";
import useCity from "@/api/useCity";
import useCountries from "@/api/useCountries";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PSelect } from "@/components/select";
import { RequestQuoteValues } from "@/lib/schemas";
import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function ShipmentDetailForm({
  control,
}: {
  control: Control<RequestQuoteValues>;
}) {
  // State for "from" fields
  const [fromStateCode, setFromStateCode] = useState<
    string | null | undefined
  >();
  const [fromCountryCode, setFromCountryCode] = useState<
    string | null | undefined
  >();

  // State for "to" fields
  const [toStateCode, setToStateCode] = useState<string | null | undefined>();
  const [toCountryCode, setToCountryCode] = useState<
    string | null | undefined
  >();

  // Fetch data for "from" location
  const { data: countryList, isLoading: countryListPending } = useCountries();
  const { data: fromStateList, isLoading: fromStateListPending } = useStateList(
    {
      country_code: fromCountryCode,
    }
  );
  const { data: fromCityList, isLoading: fromCityListPending } = useCity({
    country_code: fromCountryCode,
    state_code: fromStateCode,
  });

  // Fetch data for "to" location
  const { data: toStateList, isLoading: toStateListPending } = useStateList({
    country_code: toCountryCode,
  });
  const { data: toCityList, isLoading: toCityListPending } = useCity({
    country_code: toCountryCode,
    state_code: toStateCode,
  });

  const countryOptions = countryList?.data.map((country) => ({
    label: country.name,
    value: country.country_code,
  }));

  const fromCityOptions = fromCityList?.data.map((city) => ({
    label: city.name,
    value: city.name,
  }));

  const fromStateOptions = fromStateList?.data.map((state) => ({
    label: state.name,
    value: `${state.name}-${state.state_code}`,
  }));

  const toCityOptions = toCityList?.data.map((city) => ({
    label: city.name,
    value: city.name,
  }));

  const toStateOptions = toStateList?.data.map((state) => ({
    label: state.name,
    value: `${state.name}-${state.state_code}`,
  }));

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <FormLabel>Shipment Details</FormLabel>
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={control}
            name="shipment_details.weight"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Weight" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="shipment_details.dimensions"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Dimensions" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="space-y-4">
        <Label className="font-bold">Origin</Label>
        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="shipment_details.origin.country"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    placeholder="Country"
                    value={field.value}
                    onChange={(value) => {
                      if (value) {
                        field.onChange(value);
                        setFromCountryCode(value);
                      }
                    }}
                    options={countryOptions}
                    isLoading={countryListPending}
                    disabled={countryListPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="shipment_details.origin.state"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    placeholder="State"
                    isLoading={fromStateListPending}
                    disabled={fromStateListPending}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value?.split("-")[0]);
                      setFromStateCode(value?.split("-")[1]);
                    }}
                    options={fromStateOptions}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="shipment_details.origin.city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    isLoading={fromCityListPending}
                    placeholder="City"
                    disabled={fromCityListPending}
                    value={field.value}
                    onChange={field.onChange}
                    options={fromCityOptions}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div className="space-y-4">
        <Label className="font-bold">Destination</Label>
        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="shipment_details.destination.country"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    placeholder="Country"
                    value={field.value}
                    onChange={(value) => {
                      if (value) {
                        field.onChange(value);
                        setToCountryCode(value);
                      }
                    }}
                    options={countryOptions}
                    isLoading={countryListPending}
                    disabled={countryListPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="shipment_details.destination.state"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    placeholder="State"
                    isLoading={toStateListPending}
                    disabled={toStateListPending}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value?.split("-")[0]);
                      setToStateCode(value?.split("-")[1]);
                    }}
                    options={toStateOptions}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="shipment_details.destination.city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PSelect
                    isLoading={toCityListPending}
                    placeholder="City"
                    disabled={toCityListPending}
                    value={field.value}
                    onChange={field.onChange}
                    options={toCityOptions}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
